>
        <Eye className="h-4 w-4" />"

      
      <Button;
};"
"},;"
  );
};

"
        variant="ghost"""
        size="icon"""
        title="Send Warning"""
        aria-label="Send warning"""
        onClick={() => onAction(flagId, 'warning')}

        <Info className="h-4 w-4" />"

      
      <Button;"
        title="Suspend User"""
        aria-label="Suspend user"""
        onClick={() => onAction(flagId, 'suspension')}

        <AlertTriangle className="h-4 w-4" />"

      
        title="Ban User"""
        aria-label="Ban user"""
        onClick={() => onAction(flagId, 'ban')}

        <Ban className="h-4 w-4" />"

      
          size="sm"""
          onClick={() => onAction(flagId, 'ignore')}

        
    </div>
export const ActionButtons: React.FC < ActionButtonsProps> = ({
  flag_id,
  status,
  on_action,)
}) => {  return (
    <div className='flex space - x-2'>;
        variant='ghost';
        size='icon';
        title='View Details';
        aria - label='View details';')
        on_click={() => alert ('View details (would open a detailed view)')}        variant="ghost";"
        <Eye className='h - 4 w - 4' />;

      ;
        title='Send Warning';
        aria - label='Send warning';
        on_click={() => on_action (flag_id, 'warning')}

        <Info className='h - 4 w - 4' />;

        title='Suspend User';
        aria - label='Suspend user';
        on_click={() => on_action (flag_id, 'suspension')}

        <AlertTriangle className='h - 4 w - 4' />;

        title='Ban User';
        aria - label='Ban user';
        on_click={() => on_action (flag_id, 'ban')}

        <Ban className='h - 4 w - 4' />;

          size='sm'          on_click={() => on_action (flag_id, 'ignore')}          variant="ghost";"

        )}
    </div>);"