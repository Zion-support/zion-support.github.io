

const Messages: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
      <Head>
        <title>Messages - Zion</title>
      </Head>


      <h1 className="text-2xl font-semibold">Messages</h1>
      <EmptyState
        title="No messages yet"
        description="Start a conversation by requesting a quote or responding to an existing one."

<<<<<<< HEAD

=======
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
=======
<<<<<<< HEAD
=======
export default Messages,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      />;

    </div>;
  );
},;
export default Messages;
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
