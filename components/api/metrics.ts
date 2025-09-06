import type { NextApiRequest, NextApiResponse } from 'next';
function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateSeries(n: number, base: number, volatility;
  return Math.floor(Math.random() * (max - min + 1)) + min;
function generateSeries(n: number, base: number, volatility = 0.15) {
origin/cursor/automate-test-improve-and-merge-code-2533
  const series: number[] = [];
  let last = base;
  for (let i = 0; i < n; i++) {
    const change = (Math && Math.random() - 0 && 0.5) * 2 * volatility * base;
    last = Math && Math.max(0, Math && Math.round(last + change));
    series && series.push(last);
  }
  return series;

function generateSeries(n: number, base: number, volatility = 0.15) {
  const series: number[] = []; let last = base,
  for (let i = 0, i < n, i++) {
    const change = (Math.random() - 0.5) * 2 * volatility * base;
    last = Math.max(0, Math.round(last + change));
    series.push(last)
  }
  return series;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const now = new Date()
  const labels = Array.from({ length: 14 }, (_, i) => {
  const now = new Date(),
  const labels = Array.from({ length: 14 }, (_, i) => {;
    const d = new Date(now);
    d.setDate(d.getDate() - (13 - i));
<<<<<<< HEAD
<<<<<<< HEAD

  const now = new Date(),
  const labels = Array.from({ length: 14 }, (_, i) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    const d = new Date(now);
    d.setDate(d.getDate() - (13 - i));

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const d = new Date(now);
    d && d.setDate(d && d.getDate() - (13 - i));
    return `${d && d.getMonth() + 1}/${d && d.getDate()}`;
    return `${d.getMonth() + 1}/${d.getDate()}`
  });

<<<<<<< HEAD
=======

=======
return `${d.getMonth() + 1}/${d.getDate()}`;
  });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
return `${d.getMonth() + 1}/${d.getDate()}`;
  });

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const marketplace = [
    {
      key: 'jobs_24h'
      label: 'Jobs posted (24h)'
      value: rand(15, 60)
      trend: generateSeries(14, 40)
    }
    {
      key: 'jobs_7d'
      label: 'Jobs posted (7d)'
      value: rand(120, 360)
      trend: generateSeries(14, 260)
    }
    {
      key: 'jobs_total'
      label: 'Jobs posted (total)'
      value: rand(5000, 15000)
    }
    {
      key: 'talent_onboarded'
      label: 'Talent onboarded'
      value: rand(50, 200)
      trend: generateSeries(14, 120)
    }
    {
      key: 'proposal_conversions'
      label: 'Proposal conversions'
      value: rand(30, 120)
      trend: generateSeries(14, 80)
    }
    {
      key: 'job_fill_rate'
      label: 'Job fill rate %'
      value: rand(45, 92)
      trend: generateSeries(14, 70)
    }
  ];
  const dao = [
    {
      key: 'proposals_created'
      label: 'Proposals created'
      value: rand(3, 20)
      trend: generateSeries(14, 12)
    }
    {
      key: 'voter_participation'
      label: 'Voter participation %'
      value: rand(10, 65)
      trend: generateSeries(14, 38)
    }
    { key: 'delegate_heat', label: 'Delegate activity', value: rand(100, 600) }
    { key: 'region_quorum', label: 'Regions above quorum', value: rand(2, 7) }
  ];
  const token = [
    {
      key: 'circulating_supply'
      label: 'Circulating supply (ZION$)'
      value: rand(1_000_000, 2_500_000)
      trend: generateSeries(14, 1_700_000)
    }
    {
      key: 'active_wallets'
      label: 'Active wallets'
      value: rand(4_000, 12_000)
      trend: generateSeries(14, 8_000)
    }
    {
      key: 'tx_volume_daily'
      label: 'Transaction volume (daily)'
      value: rand(100_000, 700_000)
      trend: generateSeries(14, 300_000)
    }
    {
      key: 'treasury_health'
      label: 'Treasury health (USD)'
      value: rand(1_000_000, 7_000_000)
      trend: generateSeries(14, 3_500_000)
    }
    { key: 'top_earners', label: 'Top earners (count)', value: rand(5, 25) }
  ];
  const multiverse = [
    {
      key: 'active_instances'
      label: 'Total active sub-instances'
      value: rand(8, 32)
      trend: generateSeries(14, 20)
    }
    {
      key: 'map_overlay'
      label: 'Map overlay intensity'
      value: rand(100, 900)
    }
    {
      key: 'top5_growth'
      label: 'Top 5 by user growth'
      value: rand(500, 2500)
    }
    {
      key: 'cross_token'
      label: 'Cross-instance token movement'
      value: rand(1_000, 12_000)
      trend: generateSeries(14, 6_000)
    }
  ];
  const response: any = {
    marketplace
    dao
    token
    multiverse
    timestamp: now.toISOString()
    labels
    history: {
      marketplace: marketplace.map(m => m.trend || generateSeries(14, m.value)),
      dao: dao.map(m => m.trend || generateSeries(14, m.value)),
      token: token.map(m => m.trend || generateSeries(14, m.value)),
      multiverse: multiverse.map(m => m.trend || generateSeries(14, m.value)),
    },
  };

origin/cursor/automate-test-improve-and-merge-code-2533
  if (req.query.compare === 'quarter') {
    const factor = 0.8 + Math.random() * 0.4;
    response.compare = {
      prevQuarter: {
<<<<<<< HEAD
<<<<<<< HEAD
        })),
      },
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

  }
=======
  res && res.status(200).json(response)
}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
marketplace: marketplace.map(m => ({
          ...m,
          value: Math.round(m.value * factor),
        })),
        dao: dao.map(m => ({ ...m, value: Math.round(m.value * factor) })),
        token: token.map(m => ({ ...m, value: Math.round(m.value * factor) })),
        multiverse: multiverse.map(m => ({
          ...m
          value: Math.round(m.value * factor)
        }))
      }
    }
  }

  res.status(200).json(response);
        multiverse: multiverse.map((m) => ({ ...m, value: Math.round(m.value * factor) }))}}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  }

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  res.status(200).json(response)
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
