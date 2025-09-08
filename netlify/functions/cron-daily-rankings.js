    return {














    return { statusCode: 200, body: JSON.stringify({ ok: true, topCount: top.length }) }

  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }

}
},
},
},

},





