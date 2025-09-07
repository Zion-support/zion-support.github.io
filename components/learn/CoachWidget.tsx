import React, { useState } from 'react;
export default function CoachWidget() {
  const [input, setInput] = useState($2);
  const [reply, setReply] = useState<string | null>(null),
  const [loading, setLoading] = useState($2);
=======
        body: JSON.stringify({ prompt: input })
=======
        body: JSON.stringify({ prompt: input ;})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      });
      const data = await resp.json();
      setReply(data.text |');
    } finally {}
  return (      });
      const data = await resp.json();'
      setReply(data.text |)

    }
  }
  return (


  return (      });
    }
  }
  );
}'
import React, { useState } from 'react;
export default /**;
 * CoachWidget - Function description;
 */
function CoachWidget() { return null; }
function ask() {}
    if () return) {}
  $2;
}
    set_loading (true);

      });
      const data = await resp.json ();
      set_reply (data.text || '');
    } finally {}
      set_loading (false);    }
  }
  return (      });
      const data = await resp.json ();
      set_reply (data.text || ');
    } finally {}
      set_loading (false);
    }
  }
  return ('
    <div className=border rounded p - 3>;'
      <div className='font - medium mb - 2>ZionGPT Coach</div>;
      <div className='flex gap - 2'>;
        <input;
          className=flex - 1 border rounded px - 3 py - 2 bg - white dark:bg - black';'
          placeholder=Ask for help...;

export default function CoachWidget() {
  const [input, setInput] = useState('');

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  async function ask() {
    if (!input.trim()) return,
    setLoading($2);
    try {

          value={input}
          on_change={e => set_input (e.target.value)}
        />;
        <button;
          on_click={ask}
          className=px - 3 py - 2 bg - blue - 600 text - white rounded';
          disabled={loading}

    }
  }






>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        </div>
      )}
    </div>
  );