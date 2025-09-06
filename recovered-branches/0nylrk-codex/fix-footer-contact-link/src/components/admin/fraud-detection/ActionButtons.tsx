interface ActionButtonsProps {
  flag_id: string;
  status: string;
      <Button
        variant="ghost"
        size="icon"
        title="View Details"
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
      <Button
        variant="ghost"
        size="icon"
        title="Send Warning"
        onClick={() => onAction(flagId, "warning")}
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
        onClick={() => onAction(flagId, "suspension")}
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
        onClick={() => onAction(flagId, "ban")}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAction(flagId, "ignore")}
        >;
          Ignore;
        </Button>;
      )}
    </div>;
  );
}

      <Button;
        variant="ghost";
        size="icon";
        title="View Details";
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Send Warning";
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Suspend User";
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Ban User";
