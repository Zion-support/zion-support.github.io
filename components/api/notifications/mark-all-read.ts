 const {
  error 
}= await supabase .from ('notifications') .update ({
  read status: true 
}) .eq ('user id', userId) .eq ('read status', false);
}
}