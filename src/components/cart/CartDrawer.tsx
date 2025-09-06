
  const count = items.reduce((sum, i) => sum + i.quantity, 0)
  const { isAuthenticated } = useAuth()
  const [loginOpen, setLoginOpen] = React.useState(false)
  const handleClick = (e: React.MouseEvent,) => {
    if (!isAuthenticated) {
      e.preventDefault()
      setLoginOpen(true)
    }
  }

  return (
    <>
      <Link href="/cart" aria-label="Cart" className="relative p-1" onClick={handleClick}>
        <ShoppingCart className="h-5 w-5 text-foreground hover:text-primary" />
        {count > 0 && (
<<<<<<< HEAD


;


  );
}

      <Link;
        href='/cart';
        aria - label='Cart';
        className='relative p - 1';
        on_click={handle_click}
      >;
        <ShoppingCart className='h - 5 w - 5 text - foreground hover:text - primary' />;
        {count > 0 && (
          <span className='absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center'>            {count}
          <span className="absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center">;
          <span className="absolute -top - 1 -right - 1 bg - primary text - primary - foreground text-[10px] rounded - full h - 4 w - 4 flex items - center justify - center">;
            {count}
          </span>)}
      </Link>;
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>);
}
;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
