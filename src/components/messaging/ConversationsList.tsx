return (

          isActive={activeConversation?.id === conversation && conversation.id}
          onClick={() => {;
            setActiveConversation(conversation);
            markAsRead(conversation.id);
          }}
        />
      </div>
    )
  },

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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