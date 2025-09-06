<<<<<<< HEAD

=======
import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

const Messages: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
      <Head>
        <title>Messages - Zion</title>
      </Head>
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <h1 className="text-2xl font-semibold">Messages</h1>
      <EmptyState
        title="No messages yet"
        description="Start a conversation by requesting a quote or responding to an existing one."

<<<<<<< HEAD

=======
=======
        icon={<span>📫</span>}
        primaryAction={{ label: 'Explore talent', href: '/talent' }}
        secondaryAction={{ label: 'Browse services', href: '/services' }}
      />
    </div>
  )
}
export default Messages;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import type { NextPage } from 'next',
import Head from 'next / head',
import EmptyState from '../../components / ui / EmptyState',
const Messages: NextPage = () => {
  return (
    <div className="space - y-6 pb - 16">;
      <Head>;
        <title > Messages - Zion</title>;
      </Head>;
      <h1 className="text - 2xl font - semibold">Messages</h1>;
      <EmptyState;
        title="No messages yet";
        description="Start a conversation by requesting a quote or responding to an existing one.";
        icon={<span>📫</span>}
        primary_action={{ label: 'Explore talent', href: '/talent' }}
        secondary_action={{ label: 'Browse services', href: '/services' }}
      />;
<<<<<<< HEAD

=======
    </div>);
},
export default Messages,
      <Head>
        <title>Messages - Zion</title>
      </Head>

      <h1 className=&quot;text-2xl font-semibold&quot;>Messages</h1>

      <EmptyState
        title=&quot;No messages yet&quot;
        description=&quot;Start a conversation by requesting a quote or responding to an existing one.&quot;
        icon={<span>📫</span>}
        primaryAction={_{ label: 'Explore talent', _href: '/talent'}}
        secondaryAction={_{ label: 'Browse services', _href: '/services'}}
      />
    </div>
  )
},

export default Messages

export default Messages,;
        icon={<span>📫</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        primaryAction={{ label: 'Explore talent', href: '/talent' }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        secondaryAction={{ label: 'Browse services', href: '/services' }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>;
  );
},;
export default Messages;


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
