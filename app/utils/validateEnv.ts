export function checkEssentialEnvVars(): void {
  const requiredVars = [
    'VITE_REOWN_PROJECT_ID',
    'VITE_SUPABASE_URL',
    'VITE_SUPABASE_ANON_KEY'
  ]

  const missingVars: string[] = []
  const placeholderVars: string[] = []

  for (const varName of requiredVars) {
    const value = process.env[varName]
    
    if (!value) {
      missingVars.push(varName)
    } else if (value.includes('your_') || value.includes('placeholder') || value === 'undefined') {
      placeholderVars.push(varName)
    }
  }

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`)
  }

  if (placeholderVars.length > 0) {
    throw new Error(`Environment variables contain placeholder values: ${placeholderVars.join(', ')}`)
  }
}