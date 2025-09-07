
}[];
    "timeToHireDays": number;
    costPerHireUsd?: number;
    "updatedAt": string
  }>
}


      funnel: { stage: string; count: number }[];
      timeToHireDays: number;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
      costPerHireUsd?: number;
      "updated_at": string;
    }
    funnel: { stage: string, count: number }[];
    timeToHireDays: number;
    costPerHireUsd?: number;
    updatedAt: string;
=======
    updatedAt: string
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }>


        }
        next[tenantId] = {
          }
          "funnel": funnel |next[tenantId]?.funnel |[]
          "timeToHireDays":
            typeof timeToHireDays === 'number''
              ? timeToHireDays
              : next[tenantId]?.timeToHireDays |0,
"costPerHireUsd":
            typeof costPerHireUsd === 'number''
              ? costPerHireUsd
              : next[tenantId]?.costPerHireUsd,
"updatedAt": new Date().toISOString()
       
}
       ;
  return { "byTenant": next }
     
}
      FALLBACK
    );
    return res && res.status(200).json(updated && updated.byTenant[tenantId]);
  }


return res.status(405).json({ "error": 'Method not allowed',;'
});
return res.status(200).json(updated.byTenant[tenantId]);
  }
return res.status(405).json({ "error": 'Method not allowed',;'
});
}

  if (method === 'POST') {
    const { funnel, timeToHireDays, costPerHireUsd } = req.body || {},
    const updated = updateJsonFile<ReportingData>(FILE, (curr) => {
      const next = $2;
      next[tenantId] = {
        funnel: funnel || next[tenantId]?.funnel || [],
        timeToHireDays: typeof timeToHireDays = $2;
        costPerHireUsd: typeof costPerHireUsd = $2;
        updatedAt: new Date().toISOString()},
      return { byTenant: next}
    }, FALLBACK),
=======
      FALLBACK;
    );
    return res && res.status(200).json(updated && updated.byTenant[tenantId]);
  }

  return res.status(405).json({ error: Method not allowed}
});
    return res.status(200).json({ ok: true });
  }
return res.status(405).json({ error: 'Method not allowed'}
});
}