






















    console.error('Error generating contract:', error),
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || 'Failed to generate contract' 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    )  }
}),




