import type {_NextApiRequest, _NextApiResponse} from 'next';

function rand(_min: number, _max: number) {_return Math.floor(Math.random() * (max - min + 1)) + min;}

function generateSeries(_n: number, _base: number, _volatility = 0.15) {_const series: number[] = [];
  let _last = base;
  for (let i = 0; i < n; i++) {
    const _change = (Math.random() - 0.5) * 2 * volatility * base;
    last = Math.max(0, _Math.round(last + change));
    series.push(last);}
  return series;
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _now = new Date();
  const _labels = Array.from(_{ length: 14}, _(_, _i) => {_const _d = new Date(now);
    d.setDate(d.getDate() - (13 - i));
    return `${d.getMonth() + 1}/${_d.getDate()}`;
  });

  const _marketplace = [
    {_key: 'jobs_24h', _label: 'Jobs posted (24h)', _value: rand(15, _60), _trend: generateSeries(14, _40)},
    {_key: 'jobs_7d', _label: 'Jobs posted (7d)', _value: rand(120, _360), _trend: generateSeries(14, _260)},
    {_key: 'jobs_total', _label: 'Jobs posted (total)', _value: rand(5000, _15000)},
    {_key: 'talent_onboarded', _label: 'Talent onboarded', _value: rand(50, _200), _trend: generateSeries(14, _120)},
    {_key: 'proposal_conversions', _label: 'Proposal conversions', _value: rand(30, _120), _trend: generateSeries(14, _80)},
    {_key: 'job_fill_rate', _label: 'Job fill rate %', _value: rand(45, _92), _trend: generateSeries(14, _70)}];

  const _dao = [
    {_key: 'proposals_created', _label: 'Proposals created', _value: rand(3, _20), _trend: generateSeries(14, _12)},
    {_key: 'voter_participation', _label: 'Voter participation %', _value: rand(10, _65), _trend: generateSeries(14, _38)},
    {_key: 'delegate_heat', _label: 'Delegate activity', _value: rand(100, _600)},
    {_key: 'region_quorum', _label: 'Regions above quorum', _value: rand(2, _7)}];

  const _token = [
    {_key: 'circulating_supply', _label: 'Circulating supply (ZION$)', _value: rand(1_000_000, _2_500_000), _trend: generateSeries(14, _1_700_000)},
    {_key: 'active_wallets', _label: 'Active wallets', _value: rand(4_000, _12_000), _trend: generateSeries(14, _8_000)},
    {_key: 'tx_volume_daily', _label: 'Transaction volume (daily)', _value: rand(100_000, _700_000), _trend: generateSeries(14, _300_000)},
    {_key: 'treasury_health', _label: 'Treasury health (USD)', _value: rand(1_000_000, _7_000_000), _trend: generateSeries(14, _3_500_000)},
    {_key: 'top_earners', _label: 'Top earners (count)', _value: rand(5, _25)}];

  const _multiverse = [
    {_key: 'active_instances', _label: 'Total active sub-instances', _value: rand(8, _32), _trend: generateSeries(14, _20)},
    {_key: 'map_overlay', _label: 'Map overlay intensity', _value: rand(100, _900)},
    {_key: 'top5_growth', _label: 'Top 5 by user growth', _value: rand(500, _2500)},
    {_key: 'cross_token', _label: 'Cross-instance token movement', _value: rand(1_000, _12_000), _trend: generateSeries(14, _6_000)}];

  const response: unknown = {_marketplace, _dao, _token, _multiverse, _timestamp: now.toISOString(), _labels, _history: {
      marketplace: marketplace.map(_(m) => m.trend || generateSeries(14, _m.value)), _dao: dao.map(_(m) => m.trend || generateSeries(14, _m.value)), _token: token.map(_(m) => m.trend || generateSeries(14, _m.value)), _multiverse: multiverse.map(_(m) => m.trend || generateSeries(14, _m.value))}};

  if (req.query.compare === 'quarter') {_const _factor = 0.8 + Math.random() * 0.4;
    response.compare = {
      prevQuarter: {
        marketplace: marketplace.map(_(m) => ({ ...m, _value: Math.round(m.value * factor)})),
        dao: dao.map(_(m) => ({_...m, _value: Math.round(m.value * factor)})),
        token: token.map(_(m) => ({_...m, _value: Math.round(m.value * factor)})),
        multiverse: multiverse.map(_(m) => ({_...m, _value: Math.round(m.value * factor)}))}};
  }

  res.status(200).json(response);
}