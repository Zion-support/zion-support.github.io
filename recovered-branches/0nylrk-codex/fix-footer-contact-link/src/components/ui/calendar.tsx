import React from 'react';

interface CalendarProps {
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Calendar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Calendar;