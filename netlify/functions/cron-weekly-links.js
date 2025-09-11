
async function fetchHtml(url) {

  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`);
  return resp && resp.text();


    }

  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }

