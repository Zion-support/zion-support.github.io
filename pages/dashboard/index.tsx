<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const Dashboard: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
      <Head>
        <title>Dashboard - Zion</title>
      </Head>

<<<<<<< HEAD
<<<<<<< HEAD

      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section>
        <h2 className="text-lg font-semibold mb-2">My Jobs</h2>
        <EmptyState
          title="No jobs yet"
          description="Post your first job to get quotes from top talent."

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section>
        <h2 className="text-lg font-semibold mb-2">My Jobs</h2>
        <EmptyState
          title="No jobs yet"
          description="Post your first job to get quotes from top talent."
          icon={<span>🧰</span>}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        />
      </section>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        />
      </section>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      <section>
        <h2 className="text-lg font-semibold mb-2">Messages</h2>
        <EmptyState
          title="No messages yet"
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
        <h2 className=&quot;text-lg font-semibold mb-2&quot;>Messages</h2>
        <EmptyState
          title=&quot;No messages yet&quot;
          description=&quot;When conversations start, they’ll show up here.&quot;

          icon={<span>💬</span>}
          primaryAction={{ label: 'Browse services', href: '/services' }}
        />
      </section>
    </div>
  )
}
export default Dashboard;
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

<<<<<<< HEAD
          icon={<span>💬</span>}
          primaryAction={{ label: 'Browse services', href: '/services' }}
        />
      </section>
    </div>
  )
}
export default Dashboard;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        />;
      </section>;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    </div>;
  );
},;
export default Dashboard;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
