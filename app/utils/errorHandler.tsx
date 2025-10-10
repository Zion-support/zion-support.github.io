          'Content-Type': 'application/json'
        })
    body: JSON.stringify(error)
    try {,
      await fetch(this.config.reportEndpoint, {)
        method: 'POST'),
        headers: {,
          'Content-Type': 'application/json'})
        body: JSON.stringify(error),
