  return (
    <div className="p-3 text-center border-t border-zion-blue-light">;
      <Button
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"
export const NotificationFooter: React.FC < NotificationFooterProps> = ({
  on_close,
}) => {
  const navigate = use_navigate ();
;
  const handleViewAll = () =>: any {
    on_close ();
    navigate ("/notifications");
  }
;
  return (
    <div className="p - 3 text - center border - t border - zion - blue - light">;
      <Button;
        variant="link";
        size="sm";
        className="text - zion - slate - light text - xs";
        on_click={handleViewAll}
      >;
        View all notifications;
      </Button>;
    </div>);
}
;
