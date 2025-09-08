
}
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSeries(n: number, base: number, volatility = 0.15) {

 ;
  const series: number[] = []; let last = base,

}
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  });


const marketplace = [

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


  const multiverse = [
    { key: 'active_instances', label: 'Total active sub-instances', value: rand(8, 32), trend: generateSeries(14, 20) },
    { key: 'map_overlay', label: 'Map overlay intensity', value: rand(100, 900) },
    { key: 'top5_growth', label: 'Top 5 by user growth', value: rand(500, 2500) },
    { key: 'cross_token', label: 'Cross-instance token movement', value: rand(1_000, 12_000), trend: generateSeries(14, 6_000) }],


const token = [;
  {"key": 'circulating_supply';'
      }
      "label": 'Circulating supply (ZION$)';'
      "value": rand(1_000_000, 2_500_000)"trend": generateSeries(14, 1_700_000)}
    {"key": 'active_wallets';'
      }
      "label": 'Active wallets';'
      "value": rand(4_000, 12_000)"trend": generateSeries(14, 8_000)}
    {"key": 'tx_volume_daily';'
      }
      "label": 'Transaction volume (daily)';'
      "value": rand(100_000, 700_000)"trend": generateSeries(14, 300_000)}
    {"key": 'treasury_health';'
      }
      "label": 'Treasury health (USD)';'
      "value": rand(1_000_000, 7_000_000)"trend": generateSeries(14, 3_500_000)}
    { "key": 'top_earners', "label": 'Top earners (count)', "value": rand(5, 25) }'
  ];

const multiverse = [;
  {"key": 'active_instances';'
      }
      "label": 'Total active sub-instances';'
      "value": rand(8, 32)"trend": generateSeries(14, 20)}
    {"key": 'map_overlay';'
      }
      "label": 'Map overlay intensity';'
      "value": rand(100, 900)}
    {"key": 'top5_growth';'
      }
      "label": 'Top 5 by user growth';'
      "value": rand(500, 2500)}
    {"key": 'cross_token';'
      }
      "label": 'Cross-instance token movement';'
      "value": rand(1_000, 12_000)"trend": generateSeries(14, 6_000)}
  ];

const "response": any = {

  const dao = [
    { key: 'proposals_created', label: 'Proposals created', value: rand(3, 20), trend: generateSeries(14, 12) },
    { key: 'voter_participation', label: 'Voter participation %', value: rand(10, 65), trend: generateSeries(14, 38) },
    { key: 'delegate_heat', label: 'Delegate activity', value: rand(100, 600) },
    { key: 'region_quorum', label: 'Regions above quorum', value: rand(2, 7) }],

  const token = [
    { key: 'circulating_supply', label: 'Circulating supply (ZION$)', value: rand(1_000_000, 2_500_000), trend: generateSeries(14, 1_700_000) },
    { key: 'active_wallets', label: 'Active wallets', value: rand(4_000, 12_000), trend: generateSeries(14, 8_000) },
    { key: 'tx_volume_daily', label: 'Transaction volume (daily)', value: rand(100_000, 700_000), trend: generateSeries(14, 300_000) },
    { key: 'treasury_health', label: 'Treasury health (USD)', value: rand(1_000_000, 7_000_000), trend: generateSeries(14, 3_500_000) },
    { key: 'top_earners', label: 'Top earners (count)', value: rand(5, 25) }],

  const multiverse = [

  const response: any = $2;




        })),
      },

    }


  res.status(200).json(response),
}








