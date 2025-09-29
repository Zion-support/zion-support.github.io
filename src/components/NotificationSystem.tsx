import React from "react";

<<<<<<< HEAD
export type Notification = {
	id: string;
	message: string;
};

interface NotificationSystemProps {
	notifications: Notification[];
	onRemove: (id: string) => void;
}

export default function NotificationSystem({ notifications, onRemove }: NotificationSystemProps): React.JSX.Element | null {
	if (!notifications?.length) return null;
	return (
		<div aria-live="polite" aria-atomic="true">
			{notifications.map((n) => (
				<button key={n.id} onClick={() => onRemove(n.id)}>{n.message}</button>
			))}
		</div>
	);
}

=======
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
>>>>>>> origin/main
