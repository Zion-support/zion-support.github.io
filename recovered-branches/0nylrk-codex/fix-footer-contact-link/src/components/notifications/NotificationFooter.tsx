import React from 'react';
import { Button  } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
interface NotificationFooterProps {
  onClose: () => void
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate($2);
  const handleViewAll = () => {
    onClose($2);
    navigate('/notifications')
  },
  
  const handleViewAll = () => {
    onClose(),
    navigate('/notifications')
  },
  
export const NotificationFooter: React.FC<NotificationFooterProps> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    onClose();
    navigate("/notifications");
  };

  return (
    <div className = $2;