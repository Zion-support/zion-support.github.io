import React from "react";

export type Notification = { id: string; message?: string };

type NotificationSystemProps = {
  notifications: Notification[];
  onRemove: (id: string) => void;
};

export default function NotificationSystem(props: NotificationSystemProps): React.JSX.Element {
  void props;
  return <div aria-hidden="true" style={{ display: "none" }} />;
}

export default function NotificationSystem({ notifications, onRemove }: { notifications: Notification[]; onRemove: (id: string) => void; }): JSX.Element {
  return <div id="notification-root" />;
}
