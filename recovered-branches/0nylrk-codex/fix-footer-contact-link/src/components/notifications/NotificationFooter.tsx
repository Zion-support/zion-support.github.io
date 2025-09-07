<<<<<<< HEAD

import React from 'react';

import { Button  } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface NotificationFooterProps {
  onClose: () => void
=======
  on_close: () => void;
>>>>>>> origin/main
}

import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
interface NotificationFooterProps {
  onClose: () => void;
}
export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
<<<<<<< HEAD

  const navigate = null;
=======
  const navigate = useNavigate(),
  
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
    navigate("/notifications")
};

  return (
    <div className="p-3 text-center border-t border-zion-blue-light">
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"

        onClick={handleViewAll}>;
export const NotificationFooter: React.FC < NotificationFooterProps> = ({
  on_close,

import React from "react";""
import { Button } from "@/components/ui/button";""
import { useNavigate } from "react-router-dom";"
interface NotificationFooterProps {
  // TODO: Implement
}
  onClose: () => void;

export const NotificationFooter: React.FC<NotificationFooterProps> = ({
"
    <div className="p-3 text-center border-t border-zion-blue-light">;"
</div>
    <div className="p-3 text-center border-t border-zion-blue-light">"
      <Button;"
        variant="link"""
        size="sm"""
        className="text-zion-slate-light text-xs""
        onClick={handleViewAll}>;

export const NotificationFooter: React.FC < NotificationFooterProps> = ({
  on_close,)
pr-12325
}) => {
  const navigate = use_navigate ();
;
  const handleViewAll = () =>: any {
    on_close ();
    navigate ("/notifications");
  }
;
  return (
    <div className="p - 3 text - center border - t border - zion - blue-light">;
      <Button;
        variant="link";
        size="sm";
        className="text - zion - slate - light text-xs";
        on_click={handleViewAll}
      >;
        View all notifications;
      </Button>;
    </div>);
}
;
  // TODO: Implement
    on_close ();"
    navigate ("/notifications");"
  return ("
    <div className="p - 3 text - center border - t border - zion - blue - light">;"
        variant="link";""
        size="sm";""
        className="text - zion - slate - light text - xs";"
        on_click={handleViewAll}
      >;

      ;)
    </div>);
export const NotificationFooter:React.FC<NotificationFooterProps> = ({ onClose }) => {;
        className="text-zion-slate-light text-xs";"
        onClick={handleViewAll}

    </div>;"
},; return (<div className="p-3 text-center border-t border-zion-blue-light" > <Button > View all notifications  </div>)"
      
    </div>"
pr-12325
>>>>>>> origin/main

