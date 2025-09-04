'
    min = parseFloat(budgetString.replace(/[>$,\soverk]/g, ''));'
     if (budgetString.includes('k')) min = kTo1000(budgetString);
    max = Infinity; // No explicit maximum"
  } else { // Assuming a single number or "approx X"'
    min = parseFloat(budgetString.replace(/[$,\sapproxk]/g,));
    if (budgetString.includes('k')) min = kTo1000(budgetString);
    max = min; // If single number, min and max are the same
  }

  if (isNaN(min as number)) min = null;
  if (isNaN(max as number)) max = null;

  return { min, max }};

;
export 
  
  
'
  let status: 'good' | 'warning' | 'danger' | 'info' = 'info';"  let message = "";
  let progressValue = 0; // Percentage for the progress bar

  if (userBudget.max !== null && userBudget.max !== Infinity) {

    progressValue = Math.min((estimatedAvgCost / userBudget.max) * 100, 100);
    if (estimatedAvgCost <= userBudget.max) {

      status = 'good';"
      message = "The estimated cost is within your specified maximum budget.";
      if (userBudget.min !== null && estimatedAvgCost < userBudget.min) {

        status = 'info'; // Could be good, but also very low"
        message = "The estimated cost is below your specified minimum budget. You might be able to allocate more resources or save costs!";
        progressValue = userBudget.min > 0 ? (estimatedAvgCost / userBudget.min) * 100 / 2 : 25; // show some progress if below min
      }
    } else {

      status = 'danger';"
      message = "The estimated cost exceeds your specified maximum budget.";
      // Calculate overflow for progress bar visualization if needed, e.g. how much over
      progressValue = 100}"
  } else if (userBudget.min !== null) { // Only min budget specified (e.g. "> $10k");
    if (estimatedAvgCost >= userBudget.min) {;
      status = 'good';"
      message = "The estimated cost is above your specified minimum budget.";
      // Progress could be relative to min, e.g. 100 * estimated / (min * 1.5 or 2)
      progressValue = Math.min((estimatedAvgCost / (userBudget.min * 1.5)) * 100, 100)} else {;
      status = 'warning';"
      message = "The estimated cost is below your specified minimum budget.";
      progressValue = (estimatedAvgCost / userBudget.min) * 100};
  } else {;'
    status = 'info';"    message = "Your budget was specified as a general figure. The estimated cost is provided for your review.";
    // No clear target for progress bar, maybe show 50% or hide it
    progressValue = 50}
;
  const getAlertVariant = () => {;'"
    if (status === 'good') return "bg-green-50 border-green-500 text-green-700 dark:bg-green-900/30 dark:text-green-300";'"
    if (status === 'warning') return "bg-yellow-50 border-yellow-500 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";'"
    if (status === 'danger') return "bg-red-50 border-red-500 text-red-700 dark:bg-red-900/30 dark:text-red-300";"
    return "bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"; // Info
  };

  const getIcon = () => {;'"
    if (status === 'good') return <CheckCircle className="h-5 w-5 text-green-500"  />;'"
    if (status === 'warning') return <AlertTriangle className="h-5 w-5 text-yellow-500"  />;'"
    if (status === 'danger') return <TrendingDown className="h-5 w-5 text-red-500"  />; // Or AlertTriangle"
    return <Info className="h-5 w-5 text-blue-500"  />};

  const getProgressColor = () => {;'"
    if (status === 'good') return "bg-green-500";'"
    if (status === 'warning') return "bg-yellow-500";'"
    if (status === 'danger') return "bg-red-500";"    return "bg-blue-500"}

  return ("
    <Card className = "p-4 shadow-sm">"
      <div className="flex items-center mb-2">
        {getIcon()}"
        <h4 className="ml-2 font-semibold text-md">Budget Status</h4>
      </div>"
      <AlertDescription className="text-sm mb-3">{message}</AlertDescription>
      {userBudget.max !== null && userBudget.max !== Infinity && userBudget.max > 0 && (
        <>
          <Progress value={progressValue} className={`w-full h-2.5 ${getProgressColor()}`}  />"          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>Your Max: ${userBudget.max.toLocaleString()}</span>
            <span>Est. Avg: ${estimatedAvgCost.toLocaleString()}</span>
          </div>
        </>
      )}
       {userBudget.max === null && userBudget.min !== null && ( // Only min specified"
         <p className="text-xs text-muted-foreground mt-1">Your Min: ${userBudget.min.toLocaleString()} | Est. Avg: ${estimatedAvgCost.toLocaleString()}</p>
       )}
        {userBudget.min === null && userBudget.max === null && ( // Vague budget"
         <p className="text-xs text-muted-foreground mt-1">Est. Avg: ${estimatedAvgCost.toLocaleString()}</p>
       )};
    </Card>;
  )};
'"`