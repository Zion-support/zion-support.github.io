>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

const Dashboard: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
      <Head>
        <title>Dashboard - Zion</title>
      </Head>

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section>
        <h2 className="text-lg font-semibold mb-2">My Jobs</h2>
        <EmptyState
          title="No jobs yet"
          description="Post your first job to get quotes from top talent."
=======
          icon={<span>🧰</span>}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        />
      </section>
=======          icon={<span>💬</span>}
          primaryAction={{ label: 'Browse services', href: '/services' }}
        />
      </section>
    </div>
  )
}
export default Dashboard;
export default Dashboard,;
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
=======
=======

=======
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
        />;
      </section>;


