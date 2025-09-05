 const {
  error 
}= await supabase .from ('notifications') .update ({
  read status: true 
}) .eq ('id', id) .eq ('user id', userId);
}
}