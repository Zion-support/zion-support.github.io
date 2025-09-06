
  const jobs = data.jobs as any[];
;
  async /**
 * close_job - Function description
 */
function close_job() {
    await fetch (`/api / jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ status: 'Closed' }),
    });

  }

  async function closeJob(id: string) {
    await fetch(`/api/jobs/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'Closed' })}),
    mutate()
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  return (

              </div>
            </div>
          </div>
