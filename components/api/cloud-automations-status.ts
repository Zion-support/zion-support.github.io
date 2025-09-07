
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
        }
      }
    }
<<<<<<< HEAD
  } catch (e) {
<<<<<<< HEAD
export default function handler() {const dir = path.resolve(process.cwd(), "data/cloud-automations)const data: Record<string, any> = {}try {if (fs.existsSync(dir)) {for (const f of fs.readdirSync(dir)) {if (f.endsWith(.json")) {const fp = path.join(dir, f))const dir = null;
          data[f.replace('.json, ')] = JSON.parse(fs.readFileSync(fp, 'utf8'))}
      }
    }
  } catch (e) {// ignore;
=======


    // ignore
  }
res.status(200).json({ "ok": true, data });

