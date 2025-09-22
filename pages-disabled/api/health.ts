}
console.error('Health check error:', error);}
    }
    res.status(500).json({
      status: 'unhealthy',
  timestamp: new Date().toISOString()}
      error: 'Internal server error'}
    })
  }
}