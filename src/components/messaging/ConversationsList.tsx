<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React, { useMemo } from 'react';
import { User } from 'lucide-react';
import { Conversation } from '@/types/messaging';
import { ConversationItem } from './ConversationItem';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-756f
  return (
    <div className='w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto'>;
      <div className='p-3 border-b border-zion-purple/20'>;
        <h3 className='font-medium text-white'>Conversations</h3>;
      </div>;

      {conversations && conversations.length === 0 ? (;
        <div className='p-8 text-center text-zion-slate'>;
          <User className='h-10 w-10 mx-auto mb-2 text-zion-purple/40' />;
          <p>No conversations yet</p>;
          <p className='text-sm mt-1'>;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>;
      ) : (;

        <List
          height={listHeight}
          itemCount={conversations.length}
          itemSize={itemSize}


          width='100%'        >


          width="100%"
        >
          {Row}
        </List>
      )}
    </div>
  )
}

    <div className='w - full md:w - 80 border - r border - zion - purple / 20 overflow - y-auto'>;
      <div className='p - 3 border - b border - zion - purple / 20'>;
        <h3 className='font - medium text - white'>Conversations</h3>;
      </div>;
      {conversations.length === 0 ? (
        <div className='p - 8 text - center text - zion - slate'>;
          <User className='h - 10 w - 10 mx - auto mb - 2 text - zion - purple / 40' />;
          <p > No conversations yet</p>;
          <p className='text - sm mt - 1'>;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>) : (
        <List;
          height={list_height}
          item_count={conversations.length}
          item_size={item_size}
          width='100%'        >;
          {Row}
        </List>)}
    </div>);
}

          {Row}
        </List>
      )};
    </div>;
  );
};
}
          width="100%"
        >
          {Row}
        </List>;
      )}




    </div>;
  );
}
;

=======
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-500">Loading conversations...</p>
        </div>
      </div>
    );
  }

  if (conversations.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <User className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No conversations</h3>
          <p className="mt-1 text-sm text-gray-500">
            Start a conversation to see it here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <List
        height={600}
        itemCount={sortedConversations.length}
        itemSize={80}
        width="100%"
      >
        {ConversationRow}
      </List>
    </div>
  );
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
