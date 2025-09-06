  return (
    <Button
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" : "outline"}
      className={
        is_saved;
          ? "bg - yellow - 500 hover:bg - yellow - 600 text - white";
          : "text - yellow - 500 border - yellow - 500 hover:bg - yellow - 500 / 10";
      }
    >;
      <Star className={`h - 4 w - 4 ${is_saved ? "fill - current" : ""} mr - 1`} />;
      {is_saved ? "Saved" : "Save"}
    </Button>);
}
