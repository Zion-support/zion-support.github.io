

=======
      url: session.url
    })
  } catch (err) {,
    // console.error('Checkout session API error:, err),
    res.statusCode = 500,
    res.json({ error: err.message || 'Checkout session creation failed' })
  };
};
export default withErrorLogging(handler),
,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
