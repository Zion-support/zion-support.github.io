 .from ('jobs') .select ('*') .eq ('id', jobId) .single ();
}export default useJobDetails;
