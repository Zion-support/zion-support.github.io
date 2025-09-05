 const {
  error 
}= await supabase .from ('notifications') .delete () .eq ('user id', userId);
}
}