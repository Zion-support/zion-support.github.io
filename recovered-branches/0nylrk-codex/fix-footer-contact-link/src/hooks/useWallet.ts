 .from ('wallets') .select ('*') .eq ('user id', user.id) .single ();
}