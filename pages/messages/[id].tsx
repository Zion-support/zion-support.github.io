import React from 'react';
import { useRouter } from 'next/router';

interface MessageDetailProps {
  className?: string;
}

const MessageDetail: React.FC<MessageDetailProps> = ({ className }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={className || ''}>
      <h1>Message: {id}</h1>
      <p>This is a message detail page with ID: {id}</p>
    </div>
  );
};

export default MessageDetail;