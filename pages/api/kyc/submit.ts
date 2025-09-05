 profile.amlStatus = amlResult.status === 'clear' ? 'clear' : amlResult.status === 'match' ? 'match' : 'review';
// Flags and risk scoring profile.flags = Array.from (flags);
profile.riskScore = riskScore;
db[userId] = profile;
save (db);
}