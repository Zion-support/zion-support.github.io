const canSubmit = useMemo ( () => {
  return (talentName.trim () .length > 0 && projectName.trim () .length > 0 && scopeSummary.trim () .length > 0 && !!startDate && !!endDate && (paymentType === 'hourly' ? hourlyRate > 0 : fixedAmount > 0) setLoading (true);
setError (null);
setContract ('');
try {
  const body = {
  talentName, projectName, scopeSummary, startDate: startDate?.toISOString () .slice (0, 10), endDate: endDate?.toISOString () .slice (0, 10), payment: paymentType === 'hourly' ? {
  type: 'hourly', currency, hourlyRate, weeklyHourCap: typeof weeklyHourCap === 'number' ? weeklyHourCap : undefined, paymentSchedule 
}: {
  type: 'fixed', currency, totalAmount: fixedAmount, milestoneSummary: milestoneSummary || undefined, paymentSchedule 
};
clauses: {
  nda, ipTransfer 
};
governingLaw;
revisionRounds 
};
const res = await fetch ('/api/ai-contract', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
};
body: JSON.stringify (body) 
});
</div> </div>) 
}</div> <div> </label> </div> </div> <div> </article> </div>) 
}</div>)
