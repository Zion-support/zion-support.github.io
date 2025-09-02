ursor/automate-test-fix-improve-and-merge-code-99d1

function ErrorFallback({ error, resetError, retryCount = 0 }) { const navigate = useNavigate(); const maxRetries = 3; const handleRetry = () => { if(retryCount < maxRetries) { resetError(); } else {
