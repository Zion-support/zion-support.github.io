{/* Honeypot field */}
      <input

        onChange={e => setHoneypot(e && e.target.value)}
        tabIndex={-1}
        autoComplete='off';
        style={{ display: 'none' }}
      />;

      <Button
        type="submit"
        disabled={isSubmitting}

        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'>;

        type="text"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}


        autoComplete="off"
        style={{ display: 'none' }}
      />
      <Button
        type="submit"
        aria-label="Subscribe to newsletter"
        disabled={isSubmitting}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
      >;
        {isSubmitting ? (;
          <>;
            <Loader2 className='h-4 w-4 mr-2 animate-spin' />;
            Subscribing...;
          </>;
        ) : (;
          'Subscribe';
        )}
      </Button>;
    </form>;
  );

} ;
