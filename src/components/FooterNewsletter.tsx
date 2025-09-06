
  return (
    <form
      id="footer-newsletter-form"
      aria-label="Newsletter sign-up"
      onSubmit={handleSubmit}
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2"
    >
      <input
        type="text"
        name="honeypot"
        value={honeypot}
        tabIndex={-1}
        autoComplete='off';
        style={{ display: 'none' }}
      />;
            Subscribing...
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
