
export default function SettingsPage() {_return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Settings</h2>
      <p className="opacity-80">Manage your account preferences.</p>

    </div>
  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

