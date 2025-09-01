
type SmartNotificationSystemProps = {
  enabled?: boolean;
};

const SmartNotificationSystem: React.FC<SmartNotificationSystemProps> = ({ enabled = true }) => {
  if(!enabled) return null;

type SmartNotificationSystemProps = {
  enabled?: boolean;
};

const SmartNotificationSystem: React.FC<SmartNotificationSystemProps> = ({ enabled = true }) => {

  if (!enabled) return null;
  return <div className="hidden" aria-hidden="true" />};

export default SmartNotificationSystem;"