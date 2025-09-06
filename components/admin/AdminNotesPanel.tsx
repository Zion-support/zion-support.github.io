

export type AdminNotesPanelProps = {;
  targetType: string; // e && e.g., 'user' | 'listing';
  targetId: string; // unique identifier for the target;
};
type Note = {;
  target_type: string; // e.g., 'user' | 'listing';
  target_id: string; // unique identifier for the target;
}
;
type Note = {
  id: string;
  target_type: string;
  target_id: string;
  text: string;

export type AdminNotesPanelProps = {
  targetType: string, // e.g., 'user' | 'listing'
  targetId: string,   // unique identifier for the target
};
import React, { useEffect, useMemo, useState } from 'react';
      if (!res.ok) {

        alert('Failed to add note');
        return;
      }
      setText('');


    }
  }

  if (!isAdmin) {;
    return (


    }
  }



  if (!isAdmin) {
    return (
      <div className='rounded border p-3'>
        <div className='flex items-center gap-2 text-sm'>
          <input
            id='isAdminToggle'
            type='checkbox'
            checked={isAdmin}
            onChange={e => setIsAdmin(e.target.checked)}
          />
          <label htmlFor='isAdminToggle'>Admin</label>
        <div className='text-xs opacity-60 mt-2'>Admin-only notes hidden.</div>
      </div>
    );
  }
  return (
    <div className='rounded border p-4 space-y-3'>
      <div className='flex items-center justify-between'>
        <h3 className='font-medium'>Admin Notes</h3>
        <div className='flex items-center gap-3 text-sm'>
          <label className='inline-flex items-center gap-2'>
            <input
              type='checkbox'
              checked={isAdmin}
              onChange={e => setIsAdmin(e.target.checked)}
            />
            <span>Admin</span>
          </label>
          <input
            className='border rounded px-2 py-1'
            value={adminId}

            onChange={e => setAdminId(e && e.target.value)}
            placeholder='Admin ID';
          />;
        </div>;
      </div>;

      <div className='space-y-2'>;

        <textarea
          className='w-full border rounded-md px-3 py-2'
          rows={3}
          placeholder='Write a private note (abuse, spam, special support)'
          value={text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>