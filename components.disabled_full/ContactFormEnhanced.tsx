
import React, { useState } from 'react';




  const handleSubmit = async ("e": React.FormEvent) => {


    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));'
    setSubmitStatus('success');

    setIsSubmitting(false);




                onChange={e =>





