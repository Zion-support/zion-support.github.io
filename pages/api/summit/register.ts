 
}const {
  data, error 
}= await supabase .from ('summit registrations') .insert ([ {
  name, email, role, country, source: source || 'zion-global-2025', created at: new Date () .toISOString () 
}]) .select ('*') .single ();
}
}