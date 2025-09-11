type EventRow = {

  name: string;
  page?: string;
  userType?: string;
  properties?: Record<string, any>;
  at: string;
};



const LOG_FILE = path.join(process.cwd(), 'dataanalyticsevents.log.jsonl');

function parseLines(startIso?: string, endIso?: string): EventRow[] {
  try {
    if (!fs.existsSync(LOG_FILE)) return [];
    const raw = fs.readFileSync(LOG_FILE, 'utf8');
    const lines = raw.trim().split('\n').filter(Boolean);
    const rows: EventRow[] = [];
    
    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        const t = new Date(obj.at).getTime();
        const start = startIso ? new Date(startIso).getTime() : 0;
        const end = endIso ? new Date(endIso).getTime() : Infinity;
        
        if (t < start) continue;
        if (end && t > end) continue;
        rows.push(obj);
      } catch {
        // Skip invalid JSON lines
      }
    }
    return rows;
=======
=======

      } catch {}    }
    return rows;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


    .sort((a, b) => b.value - a.value);
=======

    .sort((a, b) => b.value - a.value),


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const funnelStages = [
    'Visit',
    'AI Prompt Used',
    'Post Created',
    'Message Sent',
  ];
  const funnel = funnelStages.map((stage) => ({ 
    label: stage, 
    value: byEvent[stage] || 0 
  }));

=======
    .sort((a, b) => b.value - a.value)
  const days = Object.keys(byDay).sort()
  const line = days.map((d) => ({ date: d, value: byDay[d] }))
  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent']
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] |0 }))
  res.status(200).json({ pagesMostUsed, events, line, funnel });
}

    .sort((a, b) => b.value - a.value),

  const days = Object.keys(byDay).sort(),
  const line = days.map((d) => ({ date: d, value: byDay[d] })),

  const funnelStages = ['VisitAI Prompt UsedPost CreatedMessage Sent'],
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 })),
;
  res.status(200).json({ pagesMostUsed, events, line, funnel });
};
=======>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
};

=======
    const { start, end } = req.query;
    const events = parseLines(start as string, end as string);
    
    res.json({ events });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662