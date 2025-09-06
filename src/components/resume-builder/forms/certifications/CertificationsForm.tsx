
<<<<<<< HEAD


  const handleEdit = (cert: Certification) => {
    setEditingId(cert.id!);
    form.reset({
      ...cert;
      issue_date: formatDateValue(cert.issue_date),
      expiration_date: formatDateValue(cert.expiration_date)})
  };



