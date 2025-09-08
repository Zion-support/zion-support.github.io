









    </Card>);
  ),; type TimeRange = '1d' | '7d' | '30d' | '90d' | '365d';
  data, error 
}= await supabase .from ('analytics events') .select ('path, count') .eq ('event typepage view') .gte ('created at', new Date (Date.now () - days * 24 * 60 * 60 * 1000) .toISOString () ) if (error) throw error;
return data || [] 
}



