<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const Dashboard: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
      <Head>
        <title>Dashboard - Zion</title>
      </Head>
<<<<<<< HEAD


      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section>
        <h2 className="text-lg font-semibold mb-2">My Jobs</h2>
        <EmptyState
          title="No jobs yet"
          description="Post your first job to get quotes from top talent."

<<<<<<< HEAD
=======

          icon={<span>🧰</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section>
        <h2 className="text-lg font-semibold mb-2">My Jobs</h2>
        <EmptyState
          title="No jobs yet"
          description="Post your first job to get quotes from top talent."
<<<<<<< HEAD
          icon={<span>🧰</span>}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }}
=======
          icon={<span>🧰</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        />
      </section>
      <section>
        <h2 className="text-lg font-semibold mb-2">Messages</h2>
        <EmptyState
          title="No messages yet"
          description="When conversations start, they’ll show up here."
<<<<<<< HEAD
      <Head>
        <title>Dashboard - Zion</title>
      </Head>

      <h1 className=&quot;text-2xl font-semibold&quot;>Dashboard</h1>

      <section>
        <h2 className=&quot;text-lg font-semibold mb-2&quot;>My Jobs</h2>
        <EmptyState
          title=&quot;No jobs yet&quot;
          description=&quot;Post your first job to get quotes from top talent.&quot;
          icon={<span>🧰</span>}
          primaryAction={_{ label: 'Post a job', _href: '/jobs/post'}}
          secondaryAction={_{ label: 'Explore talent', _href: '/talent'}}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        />
      </section>

      <section>
<<<<<<< HEAD
        <h2 className="text-lg font-semibold mb-2">Messages</h2>
        <EmptyState
          title="No messages yet"
          description="When conversations start, they’ll show up here."

<<<<<<< HEAD
          icon={<span>💬</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          primaryAction={{ label: 'Browse services', href: '/services' }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

=======
=======
        <h2 className=&quot;text-lg font-semibold mb-2&quot;>Messages</h2>
        <EmptyState
          title=&quot;No messages yet&quot;
          description=&quot;When conversations start, they’ll show up here.&quot;

=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          icon={<span>💬</span>}
          primaryAction={{ label: 'Browse services', href: '/services' }}
        />
      </section>
    </div>
  )
}
export default Dashboard;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextPage } from 'next',
import Head from 'next / head',
import EmptyState from '../../components / ui / EmptyState',
const Dashboard: NextPage = () => {
  return (
    <div className="space - y-6 pb - 16">;
      <Head>;
        <title > Dashboard - Zion</title>;
      </Head>;
      <h1 className="text - 2xl font - semibold">Dashboard</h1>;
      <section>;
        <h2 className="text - lg font - semibold mb - 2">My Jobs</h2>;
        <EmptyState;
          title="No jobs yet";
          description="Post your first job to get quotes from top talent.";
          icon={<span>🧰</span>}
          primary_action={{ label: 'Post a job', href: '/jobs / post' }}
          secondary_action={{ label: 'Explore talent', href: '/talent' }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        />;
      </section>;
<<<<<<< HEAD

=======
      <section>;
        <h2 className="text - lg font - semibold mb - 2">Messages</h2>;
        <EmptyState;
          title="No messages yet";
          description="When conversations start, they’ll show up here.";
          icon={<span>💬</span>}
          primary_action={{ label: 'Browse services', href: '/services' }}
        />;
      </section>;
    </div>);
},
export default Dashboard,
=======

<<<<<<< HEAD
=======
export default Dashboard,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          icon={<span>💬</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          primaryAction={{ label: 'Browse services', href: '/services' }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        />;
      </section>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>;
  );
},;
export default Dashboard;
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
