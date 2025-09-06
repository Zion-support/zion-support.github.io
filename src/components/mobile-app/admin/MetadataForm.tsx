interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}

  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>,) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const value = e.currentTarget.value.trim();

      if (value && !keywords.includes(value)) {
        setValue("keywords", [...keywords, value]);
        e.currentTarget.value = ""
      }
    }

  };