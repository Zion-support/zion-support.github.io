 res.status (200) .json ({
  totals: {
  totalUsers, totalTalents, totalClients, jobsPosted, jobsFilled, quotesSent, quotesAccepted, activeProjects 
};
topCategories: Object.entries (categoryCounts) .sort ( (a, b) => b[1] - a[1]) .slice (0, 5) .map ( ([label, value]) => ({
  label, value 
}) );
referralConversions;
}
}